import React, { useEffect, useState, use } from 'react';
import { AuthContext } from '../AuthContexts/AuthProvider';
import Loading from './Loading';
import found from '../assets/data.jpeg';
import Swal from 'sweetalert2';

const MyReviews = () => {
  const { user } = use(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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

  //  Delete review with SweetAlert2 modal
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
              setMyReviews((prev) => prev.filter((review) => review._id !== id));
            }
          })
          .catch((error) => console.error('Error deleting review:', error));
      }
    });
  };

  //  review with SweetAlert2 modal 
  const handleEdit = (id, currentName) => {
    Swal.fire({
      title: 'Edit Food Name',
      input: 'text',
      inputValue: currentName,
      inputPlaceholder: 'Enter new food name',
      showCancelButton: true,
      confirmButtonText: 'Save Changes',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#aaa',
      preConfirm: (newName) => {
        if (!newName || newName === currentName) {
          Swal.showValidationMessage('Please enter a new name!');
          return false;
        }

        return fetch(`http://localhost:3000/foods/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ food_name: newName }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              setMyReviews((prev) =>
                prev.map((review) =>
                  review._id === id ? { ...review, food_name: newName } : review
                )
              );
              Swal.fire('Updated!', 'Your review name has been updated.', 'success');
            } else {
              Swal.fire('Error', 'No changes were made.', 'error');
            }
          })
          .catch(() => Swal.fire('Error', 'Update failed.', 'error'));
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading />
      </div>
    );
  }

  if (myReviews.length === 0) {
    return (
      <div className="text-center mt-10">
        <div className="flex justify-center items-center">
          <img src={found} alt="" className="w-60 h-auto" />
        </div>
        <p className="text-gray-500 mt-2 mb-5">You haven't added any reviews yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5 space-y-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        My Reviews
      </h1>

      {myReviews.map((myReview) => (
        <div
          key={myReview._id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Food Image */}
          <div className="w-full md:w-1/4">
            <img
              src={myReview?.photo}
              alt={myReview?.food_name}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          {/* Food details */}
          <div className="w-full md:w-2/4 flex flex-col space-y-2 md:space-y-3">
            <h3 className="text-xl font-semibold text-blue-800">
              {myReview?.food_name}
            </h3>
            <p className="text-gray-600">{myReview?.restaurant_name}</p>
            <p className="text-sm text-gray-500">
              Posted on: {new Date(myReview?.created_at).toLocaleString()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => handleEdit(myReview._id, myReview.food_name)}
              className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(myReview._id)}
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
