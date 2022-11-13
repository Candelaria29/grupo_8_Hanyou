function MainCard(props) {
  return (
    <article className="mainCard">
      <p class="statTitle">{props.title}</p>
      <p class="statNumber">{props.quantity}</p>
    </article>
  );
}

export default MainCard;
