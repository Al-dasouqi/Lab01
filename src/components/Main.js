import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component{
    render(){
      return(
          <div>
              <HornedBeast 
              title={'Inferno'} 
              imgURL ={'https://www.movieloversmontana.com/wp-content/uploads/2017/10/inferno-movie.jpg'}
              description ={'Inferno is a 2016 American action mystery thriller film directed by Ron Howard and written by David Koepp, loosely based on the 2013 novel of the same name by Dan Brown.'}
              />

              <HornedBeast 
              title={'Steve Jobs'} 
              imgURL ={'https://media.npr.org/assets/img/2011/10/25/130199156-7c82599775330bd8a9692b91579cd7199b015930.jpg'}
              description ={'Steve Jobs is the authorized self-titled biography of Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and TIME who has written best-selling biographies of Benjamin Franklin and Albert Einstein.'}
              />
          </div>      
      )
    }
  }
  export default Main;