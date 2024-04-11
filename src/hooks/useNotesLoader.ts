import { useEffect, useState } from "react";
import { notes } from "../notes";
import Sound from "react-native-sound";

const useNotesLoader = () => {
  const [notesSounds, setNoteSounds] = useState<{ name: string; sound: Sound }[]>();

  useEffect(() => {
    loadAllNotes();
  }, []);

  const loadAllNotes = async () => {
    const tempNotes = notes.map((note) => {
      const sound = new Sound(note.source, null, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      });
      return { name: note.name, sound };
    });

    setNoteSounds(tempNotes);
  };

  return [notesSounds];
};

export { useNotesLoader };

