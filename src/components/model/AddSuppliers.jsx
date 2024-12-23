import React from "react";
import { Modal, Button, Divider } from "rsuite";
import TextField from "@mui/material/TextField";
import { useAddSupplierMutation } from "../../store/api/supplier";
import { useForm } from "react-hook-form";

function AddSuppliers({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addSupplier] = useAddSupplierMutation();

  const onSubmit = async (data) => {
    try {
      await addSupplier(data); 
      alert("Supplier added successfully!");
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
            {...register("supplierName", { required: "Supplier Name is required" })}
            id="supplier-name"
            label="Supplier Name"
            variant="outlined"
            className="w-full"
            error={!!errors.supplierName}
            helperText={errors.supplierName?.message}
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
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Phone Number must be 10-15 digits",
              },
            })}
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            className="w-full"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
          <TextField
            {...register("representativeName", {
              required: "Representative Name is required",
            })}
            id="rep-name"
            label="Representative Name"
            variant="outlined"
            className="w-full"
            error={!!errors.representativeName}
            helperText={errors.representativeName?.message}
          />
          <TextField
            {...register("representativeContact", {
              required: "Representative Contact is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Contact must be 10-15 digits",
              },
            })}
            id="rep-contact"
            label="Representative Contact"
            variant="outlined"
            className="w-full"
            error={!!errors.representativeContact}
            helperText={errors.representativeContact?.message}
          />
        </div>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary" color="red">
            Cancel
          </Button>
          <Button type="submit" appearance="primary">
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddSuppliers;
