
const Comment = (props)=>{
  return (<div className="ui comments">
  <div className="comment">
    <a className="avatar">
      <img src={props.photo} />
    </a>
    <div className="content">
      <a className="author">{props.nom}</a>
      <div className="metadata">
        <div className="date">{props.datePublication}</div>
        <div className="rating">
          <i className="star icon"></i>
          {props.evaluation} Faves
        </div>
      </div>
      <div className="text">
        {props.description}.
      </div>
    </div>
  </div>
</div>)
}

export default Comment;
