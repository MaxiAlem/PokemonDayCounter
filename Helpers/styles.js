const styles = {
    app:{
        flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#002B5B',
    width: '100%',
    },
    btn:{
        borderWidth:1,
        backgroundColor:'red',
        borderRadius:25,
        borderColor:'rgba(0,0,0,0.2)',  
    },
    pokeballbtn:{
        width: '100%',
        height: '100%',
    },
    imgcontainer:{
        width: 50,
        height: 50,
        borderRadius: 25, 
        overflow: 'hidden',
    },

    pokecard:{
        //flex:1,
        width: '45%',
        flexDirection:'column',
        borderWidth:3,
        borderColor:'yellow',
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.2)',
        alignItems: 'center',
        margin:3
    },
    text:{
        color: 'white'
    },
    title:{
        fontSize: 40,
        textDecorationLine:'underline',
        marginBottom:'10%'
    },
    calendarView:{
        alignItems:'center'
    },
    tInput:{
        margin:'5%',
        height: 40, 
        borderColor: 'gray', 
        borderRadius:5,
        backgroundColor:'rgba(255,255,255,0.1)',
        borderWidth: 1,
        width:300,
        color: 'white'
    }
}

export default styles