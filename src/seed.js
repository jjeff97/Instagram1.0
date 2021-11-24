/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'Ulz8Cz1eCOe4pw0FXcdwxqUZbg53',
        username: 'James',
        fullName: 'James Jefferson',
        emailAddress: 'Jrjefferson830@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'Bonifacio',
        fullName: 'Bonifacio Jenkins JR',
        emailAddress: 'Bonifacio@Jenkins.com',
        following: [],
        followers: ['Ulz8Cz1eCOe4pw0FXcdwxqUZbg53'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'Dele',
        fullName: 'Dele Lunchbox',
        emailAddress: 'Dele@Lunchbox.com',
        following: [],
        followers: ['Ulz8Cz1eCOe4pw0FXcdwxqUZbg53'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['Ulz8Cz1eCOe4pw0FXcdwxqUZbg53'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  © 2021 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Docs
  