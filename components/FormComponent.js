import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile"; // For the file icon
import "./FormComponent.css"; // Custom CSS for background effects

const FormComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !file) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Show success notification
    toast.success("Form submitted successfully!");

    // Reset the form fields
    setName("");
    setAge("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box className="form-container">
      <Box className="form-box">
        <Typography variant="h4" className="form-title">
          Healthcare Dashboard
        </Typography>
        <form onSubmit={handleSubmit} className="form-content">
          {/* Name Field */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />

          {/* Age Dropdown */}
          <TextField
            select
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            variant="outlined"
            fullWidth
            className="form-input"
          >
            {Array.from({ length: 100 }, (_, i) => i + 1).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>

          {/* File Upload */}
          <Box className="file-upload-container">
            <Button
              variant="outlined"
              component="label"
              className="form-input"
              fullWidth
            >
              Upload File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {file && (
              <Box className="file-info">
                <AttachFileIcon fontSize="small" />
                <Typography variant="body2" className="file-name">
                  {file.name}
                </Typography>
              </Box>
            )}
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="form-submit"
          >
            Submit
          </Button>
        </form>
      </Box>
      {/* Toast Container */}
      <ToastContainer />
    </Box>
  );
};

export default FormComponent;
