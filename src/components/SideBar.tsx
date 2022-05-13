import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  handleClickButton: (value: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export function SideBar({ handleClickButton, selectedGenreId, genres }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}