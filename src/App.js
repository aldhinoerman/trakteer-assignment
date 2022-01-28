import Card from './components/Card';

import { Images } from './assets'
import './styles/App.scss';

const data = [{
  header: Images.Header1,
  profile: Images.Profile1,
  name: "Fera Jelita",
  username: "@FeraJelly",
  description: "Hola! Fera Jelita is here! Let's trakteer kerupuk udang! Thanks love!✨",
  followers: "1.3k",
  hobbies: "Cosplay"
},
{
  header: Images.Header2,
  profile: Images.Profile2,
  name: "Clarissa Punipun",
  username: "@punipun7",
  description: "💣Klik Follow. International: ko-fi.com/punipun7💣 Baca Wajah: Cek'Post'",
  followers: "1.79m",
  hobbies: "Cosplayer"
},
{
  header: Images.Header3,
  profile: Images.Profile3,
  name: "A. Pradipta",
  username: "@APradipta",
  description: "Ada suatu masa ketika seorang pencipta merasa tidak akan pernah berhenti berkarya",
  followers: "298.88k",
  hobbies: "Comic Artist"
}
]

function App() {
  return (
    <>
      <div className="container">
        <div className="card__flex">
          {data.map((e, i) => (
            <Card
              key={i}
              header={e.header}
              profilePicture={e.profile}
              name={e.name}
              username={e.username}
              description={e.description}
              followers={e.followers}
              hobbies={e.hobbies}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
