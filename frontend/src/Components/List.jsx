import React, { useContext, useEffect, useState } from "react";
import userApiCalls from "../Endpoints/userApiCalls";
import { Box, Card, Grid, Typography } from "@mui/material";
import { PasswordContext } from "./PasswordContext";

const List = () => {
    const { passwords } = useContext(PasswordContext);

  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApiCalls.List();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [passwords ]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            backgroundImage: "linear-gradient(to right, #AD85FF, #CB67C6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginTop: "30px",
            fontFamily: "monospace",
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "0.5rem",
            paddingLeft: "10px",
          }}
          variant="h6"
          color="textSecondary"
          component="p"
        >
          Your Datas
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "row", p: 2 }}
      >
        {data.map((item, index) => (
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Card
              key={index}
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #79A1FF 0%, #ADC6FF 100%)",
                boxShadow: "2px 2px 15px rgba(150, 133, 121)",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "revert",
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                  paddingLeft: "10px",
                }}
                variant="h6"
                color="textSecondary"
                component="p"
              >
                {item.application} : {item.password}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default List;
