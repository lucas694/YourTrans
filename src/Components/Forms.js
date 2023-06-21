import "./Forms.css";

const Forms = () => {
  return(
    <div className={"FormSectionContainer"} id={"Contact"}>
      <div className={"FormLeft"}>
        <label className={"FormLabel"}>
          <input type="text" placeholder={"Your Name"}/>
          <input type="text" placeholder={"Your Email"}/>
        </label>
        <label className={"FormLabel"}>
          <input type="number" placeholder={"Your Number"}/>
          <input type="text" placeholder={"Your Country"}/>
        </label>
        <label className={"FormLabel"}>
          <input type="text" placeholder={"Company Name"}/>
          <select>
            <option value="0">Interested in</option>
            <option value="1">Web Development</option>
            <option value="2">App Development</option>
          </select>
        </label>
        <label className={"FormLabel"}>
          <textarea placeholder={"Your Message"}></textarea>
        </label>
      </div>
      <div className={"FormRight"}>
        <h1 className={"FormRTitle"}>Let’s Connect with us! Discuss for grow ...</h1>
        <p className={"FormRDesc"}>Thank you for getting in touch!</p>
        <p className={"FormRDesc"}> Kindly. Fill the form, have a great day!</p>
      </div>

    </div>
  )
};export default Forms;