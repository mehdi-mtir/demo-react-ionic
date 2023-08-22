import { useState } from "react";
const AddComment = (props)=>{
  const [comment, setComment] = useState({
    photo:'',
    nom:'',
    datePublication:'',
    evaluation:'',
    description:''
  });

  const inputChangeHandler = ({target})=>{
    setComment({...comment, [target.name]:target.value})
  }

  const addNewComment = (event)=>{
    event.preventDefault();
    props.addNewCommentRef(comment);
  }

  return <form className="ui form" onSubmit={(event)=>addNewComment(event)}>
  <div className="field">
    <label>Photo</label>
    <input type="text" name="photo" value={comment.photo} onChange={(event)=>inputChangeHandler(event)} />
  </div>
  <div className="field">
    <label>Nom</label>
    <input type="text" name="nom" value={comment.nom} onChange={(event)=>inputChangeHandler(event)}/>
  </div>
  <div className="field">
    <label>Date de publication</label>
    <input type="text" name="datePublication" value={comment.datePublication} onChange={(event)=>inputChangeHandler(event)} />
  </div>
  <div className="field">
    <label>Evaluation</label>
    <input type="text" name="evaluation" value={comment.evaluation} onChange={(event)=>inputChangeHandler(event)} />
  </div>
  <div className="field">
    <label>Description</label>
    <textarea name="description" onChange={(event)=>inputChangeHandler(event)}>{comment.description}</textarea>
  </div>
  <button className="ui button" type="submit">Valider</button>
</form>
};

export default AddComment
