export const initialState ={
    user: null,
    playlist:[],
    playing: false,
    item: null,
    //REMOVE AFTER FINSHED DEVELOPING>.....
    // token: "BQAhVKS50b33C-kiD86ziR2-VWtOW8ONscRfOWvP5w-fJySNVcb1FQ3Ay_GSJ-2PBpAsnc_hl3x572blPMWmB1Xy4fKb_uS9aycK3QxsgfnS70QxAai5AvcMhWRkxn37pxOn6h6lsmtKVRC2cY1-EZhHRW5ElUFEkmvybvlgo_BNlfzjYG2Tk9Dcd3lTE-JAtJDwpjhBdtFS05Af5ncR",
};


const reducer = (state,action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }

            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token,
                }
            case "SET_PLAYLISTS":
                return{
                    ...state,
                    playlists: action.playlists,
                };
            case "SET_DISCOVER_WEEKLY":
                return {
                    ...state,
                    discover_weekly:action.discover_weekly,
                };
    }

}

export default reducer;