const dashboardDataDefault = {
    widgets: [
      {
        id: "widget1",
        type: "reusabilityScores",
        title: "Reusability Scores",
        data: {
          timeFrames: ["7d", "14d", "30d"],
          scores: [
            {
              period: "Q1-23",
              reusable: "10%",
              natural: "2%",
              compost: "7%",
              reusableMaterial: "3%",
            },
            {
              period: "Q2-23",
              reusable: "4%",
              natural: "11%",
              compost: "5%",
              reusableMaterial: "4%",
            },
            // Add more periods as needed
          ],
          total: { "7d": "8%", "14d": "12%", "30d": "9%" },
        },
      },
      {
        id: "widget2",
        type: "emailPerformance",
        title: "Email Performance",
        description:
          "Analysis of email campaign performance, highlighting optimal send times.",
        data: {
          bestTimeToSend: "15:00",
          openRates: [
            { time: "15:00", opened: 5041 },
            { time: "16:00", opened: 5007 },
            { time: "17:00", opened: 4785 },
            // Add more time slots as needed
          ],
        },
      },

      {
        "timeframe": "7d",
        "data": [
          {
            "name": "Christmas25",
            "color": "#FF8E8E",
            "value": 5700,
            "platforms": {
              "Initial":15,
              "Google": 11,
              "Instagram": 5,
              "Facebook": 9,
              "TikTok": 7
            }
          },
          {
            "name": "BirthdaySpecial25",
            "color": "#5E5ADB",
            "value": 27000,
            "platforms": {
              "Initial":6,
              "Google": 21,
              "Instagram": 27,
              "Facebook": 3,
              "TikTok": 1
            }
          },
          {
            "name": "Newuser30",
            "color": "#5FDC8F",
            "value": 12500,
            "platforms": {
              "Initial":20,
              "Google": 30,
              "Instagram":11,
              "Facebook": 13,
              "TikTok": 28
            }
          }
        ]
      },
      {
        "timeframe": "7d",
        "data": [
          {
            "name": "Christmas25",
            "color": "#FF8E8E",
            "value": 5700,
            "platforms": {
              "Initial":15,
              "Google": 11,
              "Instagram": 5,
              "Facebook": 9,
              "TikTok": 7
            }
          },
          {
            "name": "BirthdaySpecial25",
            "color": "#5E5ADB",
            "value": 27000,
            "platforms": {
              "Initial":6,
              "Google": 21,
              "Instagram": 27,
              "Facebook": 3,
              "TikTok": 1
            }
          },
          {
            "name": "Newuser30",
            "color": "#5FDC8F",
            "value": 12500,
            "platforms": {
              "Initial":20,
              "Google": 30,
              "Instagram":11,
              "Facebook": 13,
              "TikTok": 28
            }
          },
          {
            "name": "Newuser30",
            "color": "#82D1DB",
            "value": 16000,
            "platforms": {
              "Initial":0,
              "Google": 3,
              "Instagram":2,
              "Facebook": 1,
              "TikTok": 4
              }
          },
          {
            "name": "Newuser30",
            "color": "#F0AB24",
            "value": 17500,
            "platforms": {
              "Initial":10,
              "Google": 15,
              "Instagram":20,
              "Facebook": 17.5,
              "TikTok": 15
            }
          }
        ]
      },
      {
        id: "widget4",
        type: "feedbackScores",
        title: "Feedback Scores",
        data: {
          scores: [
            { category: "Quality", score: 4.5 },
            { category: "Service", score: 4.7 },
            // Add more categories as needed
          ],
        },
      },
      {
        id: "widget5",
        type: "userGrowth",
        title: "User Growth",
        data: {
          growthData: [
            { period: "Nov2023", newUsers: 16700 },
            { period: "Dec2023", newUsers: 17500 },
            // Add more periods as needed
          ],
        },
      },
      {
        id: "widget6",
        type: "orders",
        title: "Orders",
        data: {
          orders:[
            {color:"#54D787",value:25},{color:"#FF6969",value:30},{color:"#5E5ADB",value:30},{color:"#F2E144",value:15}
          ],
          totalOrders: 89000
        },
      },
      {
        id: "widget7",
        type: "bar",
        title: "Bar",
        data: {
          array:[
            {color:"#F1E254",value:29},{color:"#FF8E8E",value:44},{color:"#96D3FF",value:21},{color:"#5FDC8F",value:33},{color:"#F182F3",value:9},{color:"#5E5ADB",value:26}
          ],
        },
      },
      {
        id: "widget8",
        type: "bar",
        title: "Bar",
        data: {
          array:[
            {color:"#F1E254",value:25},{color:"#FF8E8E",value:38},{color:"#96D3FF",value:16},{color:"#5FDC8F",value:28},{color:"#F182F3",value:7},{color:"#5E5ADB",value:20}
          ],
        },
      },
      // Add more widget definitions as needed
    ],
  };


  export default dashboardDataDefault;