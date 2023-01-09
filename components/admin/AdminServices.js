import colors from "../config/colors";
const Services=[
    {
        Sid : 0,
        SName : "View Requests",
        backGround: colors.white,
        color: colors.red
 ,navigateTo: 'AdminViewRequest'       
    },
    {
        Sid : 1,
        SName : "View Inventory",
        backGround: colors.lightblue,
        color: colors.white
        ,navigateTo: 'AdminViewInventory' 
    },
    {
        Sid : 2,
        SName : "View Technicians",
        backGround: colors.red,
        color: colors.white
        ,navigateTo: 'AdminViewTechnicians' 
       
    },  
    {
        Sid : 3,
        SName : "View Ads",
        backGround: colors.white,
        color: colors.lightblue
        ,navigateTo: 'AdminViewAds'
    }, 
    {
        Sid : 4,
        SName : "View Assigned Work",
        backGround: colors.white,
        color: colors.red
        ,navigateTo: 'AdminViewWork'
    },  
    {
        Sid : 5,
        SName : "Generate Work Reports",
        backGround: colors.lightblue,
        color: colors.white
        ,navigateTo: 'AdminGenerateReports'
       
    },   
    {
        Sid : 6,
        SName : "View Sales",
        backGround: colors.red,
        color: colors.white
        ,navigateTo: 'AdminViewSales'
    },  
    {
        Sid : 7,
        SName : "Update My Account",
        backGround: colors.white,
        color: colors.lightblue
        ,navigateTo: 'AdminUpdateAccount'
    },        
        
    ]

export default Services;