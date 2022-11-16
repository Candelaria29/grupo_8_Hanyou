import mainStyle from '../css/main.module.css';

function MainCard(props) {
  return (
    <article className={mainStyle.mainCard}>
      <p className={mainStyle.statTitle}>{props.title}</p>
      <p className={mainStyle.statNumber}>{props.quantity}</p>
    </article>
  );
}

export default MainCard;
