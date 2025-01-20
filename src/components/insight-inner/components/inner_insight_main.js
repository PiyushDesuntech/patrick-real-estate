"use client";
import React from "react";
import { Box, Typography, Avatar, Button, Divider, TextField, FormControlLabel, Checkbox, IconButton, Container, Card, CardContent } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Pinterest, MoreHoriz } from "@mui/icons-material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import BlogCard from './Blogcardsformain'
import Image from 'next/image';

const Main = () => {
  return (


    <Box
      sx={{
        padding: 4,
        backgroundColor: "transparent",
        borderRadius: "8px",
      }}
    >
      <Typography sx={{ fontSize: "27.08px", fontWeight: 500 }}>
        Housing Markets That Changed the Most This Decade               </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          gap: 2,
        }}
      >
        <Avatar
          src="https://via.placeholder.com/150"
          alt="Author"
        />
        <Typography sx={{ fontSize: "17.23px", color: "#777" }}>
          Admin | February 16, 2023 | 0 Comments
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          src="/images/Popular1.svg"
          alt="Allston"
          layout="responsive"
          width={650}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Container maxWidth="lg" sx={{  padding: 4 }}>
        {/* First text block */}
        <Typography  sx={{ marginBottom: 4, lineHeight: 1.8 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non
          odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac
          nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
          Curabitur this is a text link libero tempus congue.
        </Typography>

        {/* Second text block */}
        <Typography  sx={{ marginBottom: 4, lineHeight: 1.88 }}>
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum
          pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit
          lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis.
          Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum
          mauris sollicitudin et.
        </Typography>

        {/* Subheading */}
        <Typography  sx={{ fontWeight: 500, fontSize: "22.15px",marginBottom: 2 }}>
          Housing Markets That Changed the Most This Decade
        </Typography>

        {/* Third text block */}
        <Typography  sx={{ marginBottom: 4, lineHeight: 1.94 }}>
          Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu varius malesuada, pulvinar eu ligula.
          Ut et adipiscing erat. Curabitur adipiscing erat vel libero tempus congue. Nam pharetra interdum
          vestibulum. Aenean gravida mi non aliquet porttitor. Praesent dapibus, nisi a faucibus tincidunt, quam
          dolor condimentum metus, in convallis libero ligula ut eros.
        </Typography>

        {/* Quotation block */}
        <Card sx={{ backgroundColor: '#f9f9f9', color: '#333', marginBottom: 4 }}>
          <CardContent>
            <Typography
             
              sx={{
                fontStyle: 'italic',
                fontSize: '1.2rem',
                textAlign: 'center',
                padding: 2,
              }}
            >
              "Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus,
              quis rutrum mi accumsan nec."
            </Typography>
          </CardContent>
        </Card>

        {/* Final text block */}
        <Typography  sx={{ lineHeight: 1.8 }}>
          Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum
          mauris sollicitudin et. Mauris risus lectus, tristique at nisl at, pharetra tristique enim. Nullam this
          is a link nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Nulla elit
          mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat. Curabitur adipiscing
          erat vel libero tempus congue. Nam pharetra interdum vestibulum. Aenean gravida mi non aliquet
          porttitor. Praesent dapibus, nisi a faucibus tincidunt, quam dolor condimentum metus, in convallis
          libero ligula ut eros.
        </Typography>
      </Container>



      <Divider sx={{ marginY: 3 }} />


      {/* Share and Tags Section */}
      <Box  sx={{ marginY: 3 ,
        display:"flex",
         justifyContent:"space-between", 
         alignItems:"center",
          width:"923px",
          height:"94px",
          top:1754}}>
  {/* Share Link Section */}
  <Box display="flex" alignItems="center" gap={1}>
    <Typography  sx={{ fontWeight: '700', color: '#484848',  fontSize:"17.23px"}}>
      Share Link
    </Typography>
    <Box display="flex" gap={1}>
      <IconButton sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Facebook />
      </IconButton>
      <IconButton sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Twitter />
      </IconButton>
      <IconButton sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <LinkedIn />
      </IconButton>
      <IconButton sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Pinterest />
      </IconButton>
      <IconButton sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <MoreHoriz />
      </IconButton>
    </Box>
  </Box>

  {/* Tags Section */}
  <Box display="flex" alignItems="center" gap={1}>
    <Typography  sx={{ fontWeight: 'bold', color: '#333' }}>
      Tags:
    </Typography>
    <Typography  sx={{ color: '#666' }}>
      Apartment, Real Estate
    </Typography>
  </Box>
</Box>



      {/* Pagination Section */}
      <Box
  sx={{
    width: '923.08px',
    height: '140.92px',
    margin: '0 auto', // Center horizontally
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 0,
    border: '1.23px solid #EBEBEB',
    opacity: 1, // Ensure visibility
    paddingX: 2,
  }}
>
  {/* Previous Section */}
  <Box display="flex" alignItems="center" gap={2}>
    <Box
      sx={{
        width: '50px',
        height: '50px',
        backgroundColor: '#E0E0E0',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowBack sx={{ color: '#333' }} />
    </Box>
    <Box>
      <Typography  sx={{ fontWeight: 'bold', color: '#484848' }}>
        Prev
      </Typography>
      <Typography
     
        sx={{
          color: '#484848',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '200px',
        }}
      >
        Redfin Unveils the Best Canadian Cities for...
      </Typography>
    </Box>
  </Box>

  {/* Next Section */}
  <Box display="flex" alignItems="center" gap={2}>
    <Box textAlign="right">
      <Typography  sx={{ fontWeight: 'bold', color: '#484848' }}>
        Next
      </Typography>
      <Typography
      
        sx={{
          color: '#484848',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '200px',
          fontSize:"17.23px"
        }}
      >
        Redfin Ranks the Most Competitive
      </Typography>
    </Box>
    <Box
      sx={{
        width: '50px',
        height: '50px',
        backgroundColor: '#E0E0E0',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowForward sx={{ color: '#333' }} />
    </Box>
  </Box>
</Box>

      <Divider sx={{ marginY: 3 }} />


      {/* comment section */}
      <Box
  sx={{
    width: '923.08px',
    height: '565.54px',
    margin: '0 auto', // Center horizontally
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    opacity: 1, // Ensure visibility
  }}
>
  {/* Input Fields (Name & Email) */}
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '0px',
    }}
  >
    <TextField
      placeholder="Name"
    
      sx={{
        width: '443.08px',
        height: '61.54px',
        borderRadius: '7.38px',
        '& .MuiOutlinedInput-root': {
          border: '1.23px solid #D8D8D8',
        },
      }}
    />
    <TextField
      placeholder="Email"
      
      sx={{
        width: '443.08px',
        height: '61.54px',
        borderRadius: '7.38px',
        '& .MuiOutlinedInput-root': {
          border: '1.23px solid #D8D8D8',
        },
      }}
    />
  </Box>

  {/* Checkbox */}
  <FormControlLabel
  control={
    <Checkbox
      sx={{
        width: '16px',
        height: '16px',
        borderRadius: '3.08px',
        border: '1.23px solid #D8D8D8',
        padding: '0',
        marginRight: '8px', // Adjust the space between checkbox and text
      }}
    />
  }
  label={
    <Typography
      sx={{
        color: '#000',
        fontSize: '14px',
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: 'calc(100% - 24px)', // Ensure the text does not overflow
        overflowWrap: 'break-word', // Prevent text from spilling out
      }}
    >
      Save my name, email, and website in this browser for the next time I comment.
    </Typography>
  }
/>




  {/* Text Area */}
  <TextField
    placeholder="Write Your Comment"
    multiline
    rows={10}
  
    sx={{
      width: '923.08px',
      height: '307.69px',
      borderRadius: '7.38px',
      '& .MuiOutlinedInput-root': {
        border: '1.23px solid #D8D8D8',
        borderRadius: '7.38px',
      },
    }}
  />

  {/* Submit Button */}
  <Button
  
    sx={{
      width: '260.11px',
      height: '64px',
      backgroundColor: '#ECE5CE',
      color: '#E8E1C4',
      fontWeight: 'bold',
      border:"1.23px",
      borderColor:"#E8E1C4",
      borderRadius: '7.38px',
      marginTop: '16px', // Space from the text area
      textTransform: 'none',
       // Prevent uppercase
    }}
  >
     <Typography sx={{ color: '#000', fontSize: '20px', fontWeight:"700px" }}>
      Submit Comment  
 </Typography>
  </Button>
</Box>



   {/* Blog Card Section */}
   <Typography sx={{ color: '#000', fontSize: '20px', fontWeight:"700px" }}>
      Related Posts
 </Typography>

   <Box
    sx={{
      width: '100%',  // Ensures it takes up full width of the parent container
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Aligns the content to the left
      marginBottom: 3, // Add spacing between this and the next section
    }}
  >
    <BlogCard />  {/* Render BlogCard */}
  </Box>
     
    </Box>
  );
};

export default Main;
