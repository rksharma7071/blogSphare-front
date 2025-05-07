import React from "react";
import { Link } from "react-router-dom";
import { deleteCategoryWithId } from "../api_fetch/category";

function CategoryTable({ refreshCategories, categories }) {
  const handleDeleteCategory = async (id) => {
    if (confirm("Do you want to delete category?")) {
      try {
        const response = await deleteCategoryWithId(id);
        alert(response.data.message);
        await refreshCategories();
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <div>
      <h1>All Categories</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories && categories.length > 0 ? (
            categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category._id}</td>
                <td>
                  <strong>
                    <Link to={category._id}>{category.name}</Link>
                  </strong>
                </td>
                <td>{category.description}</td>
                <td>
                  <button onClick={() => handleDeleteCategory(category._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>
                <h2 style={{ textAlign: "center" }}>No users found</h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
