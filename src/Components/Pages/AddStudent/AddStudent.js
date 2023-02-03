import { Button, TextField } from "@mui/material";
import React from "react";

const AddStudent = () => {
  return (
    <div className="mt-4 px-10 w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">Add Student</h2>
        <small>Date: 03-02-2023</small>
      </div>
      <form action="" className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Middle Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TextField
            id="outlined-select-currency-native"
            select
            label="Select Class"
            defaultValue="1"
            SelectProps={{
              native: true,
            }}
            
          >
            <option key="1" value="1">1</option>
            <option key="2" value="2">2</option>
            <option key="3" value="3">3</option>
            <option key="4" value="4">4</option>
            <option key="5" value="5">5</option>
            <option key="6" value="6">6</option>
            <option key="7" value="7">7</option>
            <option key="8" value="8">8</option>
            <option key="9" value="9">9</option>
            <option key="10" value="10">10</option>
            <option key="11" value="11">11</option>
            <option key="12" value="12">12</option>
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Select Division"
            defaultValue="A"
            SelectProps={{
              native: true,
            }}
            
          >
            <option key="A" value="A">A</option>
            <option key="B" value="B">B</option>
            <option key="C" value="C">C</option>
            <option key="D" value="D">D</option>
            <option key="E" value="E">E</option>
          </TextField>
          <TextField
            id="outlined-basic"
            label="Enter Roll Number in Digits"
            variant="outlined"
          />
        </div>

        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            id="outlined-basic"
            label="Address Line 1"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Address Line 2"
            variant="outlined"
          />
        </div>
        <div className="grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TextField
            id="outlined-basic"
            label="Landmark"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="PinCode"
            variant="outlined"
          />
        </div>
        <Button variant='contained' type="submit">Add Student</Button>
      </form>
    </div>
  );
};

export default AddStudent;
