import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../AuthContexts/AuthProvider';
import Loading from './Loading';
import found from '../assets/data.jpeg';
import Swal from 'sweetalert2';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch('http://localhost:3000/foods')
      .then((res) => res.json())
      .then((data) => {
        const reviews = data.filter((review) => review?.email === user?.email);
        setMyReviews(reviews);
      })
      .catch((error) => console.error('Error fetching reviews:', error))
      .finally(() => setLoading(false));
  }, [user]);

  // Delete review
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this review?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Confirm!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
              setMyReviews((prev) => prev.filter((review) => review._id !== id));
            }
          });
      }
    });
  };

  const handleEditStart = (review) => {
    setEditingId(review._id);
    setEditData({
      food_name: review.food_name,
      restaurant_name: review.restaurant_name,
      rating: review.rating,
      review: review.review,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e, id) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/foods/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editData),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      Swal.fire('Updated!', 'Your review has been updated.', 'success');
      setMyReviews((prev) =>
        prev.map((review) =>
          review._id === id ? { ...review, ...editData } : review
        )
      );
      setEditingId(null);
    } else {
      Swal.fire('Error', 'No changes were made.', 'error');
    }
  };

  if (loading) return <Loading />;

  if (myReviews.length === 0)
    return (
      <div className="text-center mt-10">
        <img src={found} alt="" className="w-60 mx-auto" />
        <p className="text-gray-500 mt-2 mb-5">You haven't added any reviews yet.</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-5 space-y-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        My Reviews
      </h1>

      {myReviews.map((review) => (
        <div
          key={review._id}
          className="bg-gray-200 rounded-lg shadow-md p-4 space-y-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img
              src={review.photo}
              alt={review.food_name}
              className="w-40 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-800">
                {review.food_name}
              </h3>
              
              <p className="text-gray-600">{review.restaurant_name}</p>
              <p className="text-sm text-gray-500">
                Posted on: {new Date(review.created_at).toLocaleString()}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleEditStart(review)}
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Edit form */}
          {editingId === review._id && (
            <form
              onSubmit={(e) => handleEditSubmit(e, review._id)}
              className="mt-4 p-4 bg-white rounded-lg border space-y-3"
            >
              <div>
                <label className="block text-sm font-medium">Food Name</label>
                <input
                  name="food_name"
                  value={editData.food_name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Restaurant Name</label>
                <input
                  name="restaurant_name"
                  value={editData.restaurant_name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Rating</label>
                <input
                  name="rating"
                  type="number"
                  value={editData.rating}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Review</label>
                <textarea
                  name="review"
                  value={editData.review}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows="3"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
