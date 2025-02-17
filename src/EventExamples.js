const EventExamples = () => {
  // Define the event handlers
  const handleFormInput = (e) => {
    console.log(e.target.value);
  };
  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{
            margin: "1rem 0",
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClick}>Click Me!</button>
    </section>
  );
};
export default EventExamples;
