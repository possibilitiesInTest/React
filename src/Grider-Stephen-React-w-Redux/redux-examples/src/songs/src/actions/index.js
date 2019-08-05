// Action creator
const selectSong = () => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};