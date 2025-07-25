import React from "react";
import { Modal, Button, Divider } from "rsuite";
import TextField from "@mui/material/TextField";
import { useAddSupplierMutation } from "../../store/api/supplier";
import { useForm } from "react-hook-form";

function AddSuppliers({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addSupplier, { isLoading }] = useAddSupplierMutation();

  const onSubmit = async (data) => {
    try {
      await addSupplier(data).unwrap(); // Use unwrap() for proper error handling
      alert("Supplier added successfully!");
      reset(); // Reset form after successful submission
      handleClose();
    } catch (error) {
      console.error("Failed to add supplier:", error);
      alert("Failed to add supplier. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose} style={{ top: "20px" }}>
      <Modal.Title>Add New Supplier</Modal.Title>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <TextField
            {...register("supplier_name", {
              required: "Supplier Name is required",
            })}
            id="supplier-name"
            label="Supplier Name"
            variant="outlined"
            className="w-full"
            error={!!errors.supplier_name}
            helperText={errors.supplier_name?.message}
          />
          <TextField
            {...register("description")}
            id="description"
            label="Description"
            variant="outlined"
            className="w-full"
          />
          <TextField
            {...register("address", { required: "Address is required" })}
            id="address"
            label="Address"
            variant="outlined"
            className="w-full"
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            {...register("phone_number", {
              required: "Phone Number is required",
              pattern: {
                value: /^[\+]?[0-9\-\(\)\s]{10,20}$/,
                message: "Please enter a valid phone number",
              },
            })}
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            className="w-full"
            error={!!errors.phone_number}
            helperText={errors.phone_number?.message}
          />
          <TextField
            {...register("representative_name", {
              required: "Representative Name is required",
            })}
            id="rep-name"
            label="Representative Name"
            variant="outlined"
            className="w-full"
            error={!!errors.representative_name}
            helperText={errors.representative_name?.message}
          />
          <TextField
            {...register("representative_contact", {
              required: "Representative Contact is required",
            })}
            id="rep-contact"
            label="Representative Contact (Email)"
            variant="outlined"
            className="w-full"
            error={!!errors.representative_contact}
            helperText={errors.representative_contact?.message}
          />
        </div>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            appearance="primary"
            color="red"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" appearance="primary" loading={isLoading}>
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddSuppliers;
