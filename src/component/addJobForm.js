import React from "react";

const AddJobForm = ({
  handleJobChange,
  handleCompanyChange,
  formData,
  handleJobSubmit,
}) => {
  return (
    <>
      <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 class="text-2xl font-medium mb-4">Add Job</h2>
        <div class="mb-4">
          <label for="gender" class="block text-gray-700 font-medium mb-2">
            Job type
          </label>
          <select
            name="type"
            onChange={handleJobChange}
            value={formData.type}
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="Full Time">Full time</option>
            <option value="Part Time">Part time</option>
            <option value="Remote">Remote</option>
            <option value="Intership">Intership</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">
            Job Listing Name
          </label>
          <input
            type="text"
            name="title"
            onChange={handleJobChange}
            value={formData.title}
            placeholder="eg. Beautiful Apartment In Miami"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleJobChange}
            value={formData.description}
            placeholder="Add any job duties, expectations, requirements, etc"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2">Salary</label>
          <select
            name="salary"
            onChange={handleJobChange}
            value={formData.salary}
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="Under $50K">Under $50K</option>
            <option value="50K - $60K">$50K - $60K</option>
            <option value="60K - $70K">$60K - $70K</option>
            <option value="$70K - $80K">$70K - $80K</option>
            <option value="$800K - $90K">$800K - $90K</option>
            <option value="$90K - $100K">$90K - $100K</option>
            <option value="$100K - $125K">$100K - $125K</option>
            <option value="$125K - $150K">$125K - $150K</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            onChange={handleJobChange}
            value={formData.location}
            placeholder="Company Location"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <h2 class="text-2xl font-medium mb-4">Company Info</h2>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">
            Comapany Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleCompanyChange}
            value={formData.company.name}
            placeholder="Company Name"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div class="mb-4">
          <label for="age" class="block text-gray-700 font-medium mb-2">
            Comapany Description
          </label>
          <textarea
            name="description"
            onChange={handleCompanyChange}
            value={formData.company.description}
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
            placeholder="What does your company do"
          />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">
            Contact Email
          </label>
          <input
            type="email"
            name="contactEmail"
            onChange={handleCompanyChange}
            value={formData.company.contactEmail}
            placeholder="Email address for applicants"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">
            Contact phone
          </label>
          <input
            type="text"
            name="contactPhone"
            onChange={handleCompanyChange}
            value={formData.company.contactPhone}
            placeholder="Optional phone for applicants"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

        <button
          onClick={handleJobSubmit}
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Job
        </button>
      </div>
    </>
  );
};

export default AddJobForm;
