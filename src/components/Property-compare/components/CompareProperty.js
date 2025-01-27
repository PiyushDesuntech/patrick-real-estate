import React, { useState } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const CompareProperty = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [projects, setProjects] = useState([
    { name: 'ATS Pristine City', location: 'Sector 1, Any Street, Canada' },
    { name: 'Mahagun Mantra', location: 'Sector 3, ABC, Canada' }
  ]);

  const handleRemoveProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '1250px',
      height: { xs: 'auto', md: '350px' },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      bgcolor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      overflow: 'hidden',
      mb: 3,
      border: '1px solid #000000'
    }}>
      {/* Features Label - EDITED: Reduced padding and adjusted sizing */}
      <Box sx={{ 
        flex: { xs: '0 0 auto', md: '0.8' }, // Slightly reduced flex value
        display: 'flex',
        alignItems: 'center',
        p: 4.7, // Reduced padding from 3 to 2
        borderRight: { xs: 'none', md: '1px solid #e0e0e0' },
        borderBottom: { xs: '1px solid #e0e0e0', md: 'none' }
      }}>
        <Typography sx={{ 
          fontSize: { xs: '16px', md: '18px' }, // Slightly reduced font size
          color: '#303030',
          fontWeight: 400
        }}>
          Features
        </Typography>
      </Box>

      {/* Project Cards */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flex: { xs: '1', md: '3.2' } // Adjusted to compensate for features box reduction
      }}>
        {projects.map((project, index) => (
          <Box key={project.name} sx={{ 
            flex: '1',
            borderLeft: { xs: 'none', md: '1px solid #e0e0e0' },
            borderBottom: { xs: '1px solid #e0e0e0', md: 'none' },
            p: 3,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1
            }}>
              <Typography sx={{ 
                fontSize: { xs: '16px', md: '18px' },
                color: '#303030',
                fontWeight: 500
              }}>
                {project.name}
              </Typography>
              <CloseIcon 
                onClick={() => handleRemoveProject(index)}
                sx={{
                  fontSize: { xs: '20px', md: '25px' },
                  color: '#909090',
                  cursor: 'pointer',
                }}
              />
            </Box>
            <Typography sx={{ 
              fontSize: '14px',
              color: '#666',
              mb: 2
            }}>
              {project.location}
            </Typography>
            <Box sx={{ 
              width: '100%',
              height: { xs: '180px', sm: '200px' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: "6px",
            }}>
              <Image
                src={index === 0 ? "/Images/Propertycompare2.png" : "/Images/Propertycompare2.png"}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
            <Box sx={{ mt: 'auto', pt: 2 }}>
              <Typography sx={{ 
                fontSize: '14px',
                color: '#606060',
                mb: 1
              }}>
                2,3 BHK
              </Typography>
              <Typography sx={{ 
                fontSize: '14px',
                color: '#333'
              }}>
                $84.0 Lac - 1.54 Cr
              </Typography>
            </Box>
            {index === 1 && (
              <Box sx={{
                position: { xs: 'absolute', md: 'absolute' },
                left: { xs: '50%', md: '-18px' },
                top: { xs: '-18px', md: '50%' },
                transform: { 
                  xs: 'translateX(-50%)', 
                  md: 'translateY(-50%)' 
                },
                width: '36px',
                height: '36px',
                bgcolor: '#dcefec',
                border: '1px solid #B2DFD8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#009681',
                fontSize: '14px',
                fontWeight: 500,
                zIndex: 1,
              }}>
                VS
              </Box>
            )}
          </Box>
        ))}

        {/* Add Project Section */}
        <Box sx={{ 
          flex: '1',
          borderLeft: { xs: 'none', md: '1px solid #e0e0e0' },
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: '200px', md: 'auto' }
        }}>
          <Typography sx={{ 
            fontSize: '14px',
            color: '#909090',
            mb: 2,
            textAlign: 'center'
          }}>
            Add Project to Compare
          </Typography>
          <Button
            variant="outlined"
            startIcon={<span>+</span>}
            sx={{
              height: '32px',
              borderRadius: '16px',
              border: '1px solid #000',
              color: '#000000',
              textTransform: 'none',
              fontSize: '14px',
              padding: '4px 16px',
              fontWeight: 400,
              '&:hover': {
                borderColor: '#000',
                bgcolor: 'transparent'
              }
            }}
          >
            Add Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompareProperty;