import React, {useState} from 'react';


const NewBoxForm = (props) => {

    const INITIAL_STATE = {
        color: "",
        width: "",
        height: ""
      }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
      const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      };

      const handleSubmit = evt => {
        evt.preventDefault();
        props.addBox(formData);
        setFormData(INITIAL_STATE);
      };

      return (
          <form onSubmit={handleSubmit}>
              <label htmlFor="color">Color:</label>
              <input id="color" 
                     name="color"
                     type="text" 
                     placeholder="color" 
                     value={formData.color} 
                     onChange={handleChange} />
              <label htmlFor="width">Width:</label>
              <input id="width" 
                     name="width"
                     type="text" 
                     placeholder="width" 
                     value={formData.width} 
                     onChange={handleChange} />
              <label htmlFor="height">Height:</label>
              <input id="height"
                     name="height"
                     type="text" 
                     placeholder="height" 
                     value={formData.height} 
                     onChange={handleChange} />
              <button type="submit">Add Box</button>
          </form>
      )
}

export default NewBoxForm;
