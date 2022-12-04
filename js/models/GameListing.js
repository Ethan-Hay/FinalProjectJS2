function GameListing(id,data){
    id = id ?? '';
    data = data ?? {};
    return{
        id: id,
        game: data.game ?? '',
        dm: data.dm ?? '',
        daysPlaying: data.daysPlaying ?? '',
        startTime: data.startTime ?? '',
        endTime: data.endTime ?? '',
        openSpots: data.openSpots ?? 0
    }
}