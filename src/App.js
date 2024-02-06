import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ First_Name: "", Last_Name: "", Email: "", Country: "", Street_Address: "", Comments: true, Candidates: true, Everything: ""})
  function ChangeHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    }
    )
  }
  function SubmitHandler(event){
    event.preventDefault();
    console.log("My entire form data...",formData);
  }
  return (
    <div className="App">
      <form onSubmit={SubmitHandler}>
        <label>First_Name:</label>
        <input
          type='text'
          placeholder='First_Name'
          name='First_Name'
          value={formData.First_Name}
          onChange={ChangeHandler}
        />
        <label>Last_Name:</label>
        <input
          type='text'
          placeholder='Last_Name'
          name='Last_Name'
          value={formData.Last_Name}
          onChange={ChangeHandler}
        />
        <label>Email:</label>
        <input
          type='text'
          placeholder='Email'
          name='Email'
          value={formData.Email}
          onChange={ChangeHandler}
        />
        <label>Please select your Country:</label>
        <select
          name='Country'
          onChange={ChangeHandler}
          value={formData.Country}
          >
          <option value="India">India</option>
          <option value="United Kindom">United Kindom</option>
          <option value="United States">United States</option>
          <option value="UAE">UAE</option>
        </select>
        <label>Enter your Address:</label>
        <input
          type='text'
          placeholder='Street Address'
          name='Street_Address'
          value={formData.Street_Address}
          onChange={ChangeHandler}
        />
        <input
          type='checkbox'
          name="Comments"
          checked={formData.Comments}
          onChange={ChangeHandler}
        />
        <label>Comments</label>
        <input
          type='checkbox'
          name="Candidates"
          checked={formData.Candidates}
          onChange={ChangeHandler}
        />
        <label>Candidates</label>
        <input
          type='radio'
          name="Everything"
          value="Everything_radio"
          checked={formData.Everything === 'Everything_radio'}
          onChange={ChangeHandler}
        />
        <label>Everything</label>
        <input
          type='radio'
          name="Everything"
          value="No_Push_Notification_radio"
          checked={formData.Everything === 'No_Push_Notification_radio'}
          onChange={ChangeHandler}
        />
        <label>No_Push_Notification</label>
        <button onChange={ChangeHandler}>Save</button>
      </form>
    </div>
  );
}

export default App;
