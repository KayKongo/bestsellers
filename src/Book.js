const Book = ({ img, title, author, number }) => {
  return (
    <article className="book">
      <span className="number">{`# ${number + 1}`}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
export default Book;
