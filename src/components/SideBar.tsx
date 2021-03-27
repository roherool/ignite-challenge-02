import { useEffect, useState } from 'react';

import { Button } from '../components/Button';

import '../styles/sidebar.scss';


import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props) {
  const [selectedGenreId, setSelectedGenreId] = useState(3);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function onClickCategory(id: number) {
    setSelectedGenreId(id);
  }
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Movie<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => {props.setCateg(genre.id); onClickCategory(genre.id); console.log('Sidebar:',genre.id)}}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </div>
  )
}