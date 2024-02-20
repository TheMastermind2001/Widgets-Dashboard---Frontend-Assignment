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
          bestTimeToSend: "15:03 PM",
          openRates: [
            { time: "15:03 PM", opened: 5041 },
            { time: "16:00 PM", opened: 5007 },
            { time: "17:00 PM", opened: 4785 },
            // Add more time slots as needed
          ],
        },
      },
      {
        id: "widget3",
        type: "salesData",
        title: "Sales Data",
        data: {
          salesFigures: [
            { product: "Christmas25", sales: 5700 },
            { product: "BirthdaySpecial25", sales: 27000 },
            // Add more products as needed
          ],
          totalSales: 89000,
        },
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
      // Add more widget definitions as needed
    ],
  };


  export default dashboardDataDefault;