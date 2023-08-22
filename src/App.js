import './App.css';
import AddComment from './components/AddComment';
import Card from './components/Card';
import Comment from './components/Comment';
import { useState } from 'react';

function App() {
  const [comments, setComments] = useState([
    {
      id:1,
      photo:'https://semantic-ui.com/images/avatar/small/stevie.jpg',
      nom:'Stevie Feliciano',
      datePublication:'20/08/2023',
      evaluation:'5',
      description:'Hey guys, I hope this example comment is helping you read this documentation.'
    },
    {
      id:2,
      photo:'https://semantic-ui.com/images/avatar/small/joe.jpg',
      nom:'Tom Lukic',
      datePublication:'21/08/2023',
      evaluation:'4',
      description:'This will be great for business reports. I will definitely download this.'
    }
  ]);

  const addNewComment = (comment)=>{
    setComments([...comments, comment]);
  }

  return (
    <div class="container">
    <div class="ui cards">
      {
        comments.map(
          comment=>(
            <Card key={comment.id} >
              <Comment {...comment} />
            </Card>
          )
        )
      }
    </div>
    <div>
      <AddComment addNewCommentRef={addNewComment}/>
    </div>
    </div>
  );
}

export default App;
