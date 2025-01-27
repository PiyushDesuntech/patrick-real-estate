import React from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const TableRow = ({ label, value1, value2, isHeader = false, showDash = false, noBorder = false, isLastAmenity = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        borderBottom: noBorder ? 'none' : '1px solid #e0e0e0',
        bgcolor: 'white',
        ...(isLastAmenity && {
          minHeight: { xs: 'auto', sm: '80px' }
        })
      }}>
        <Box sx={{ 
          width: { xs: '100%', sm: '25%' },
          borderRight: { xs: 'none', sm: '1px solid #e0e0e0' },
          borderBottom: { xs: '1px solid #e0e0e0', sm: 'none' },
          display: 'flex',
          alignItems: 'center',
          bgcolor: isHeader ? 'white' : '#F5F5F5',
          p: 2,
        }}>
          <Typography sx={{ 
            fontSize: { xs: '16px', sm: isHeader ? '18px' : '14px' },
            color: '#303030',
            fontWeight: isHeader ? 600 : 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            ...(isLastAmenity && {
              textAlign: 'center',
              margin: 'auto'
            })
          }}>
            {label}
            {isHeader && (
              <IconButton size="small">
                <KeyboardArrowUpIcon sx={{ color: '#303030' }} />
              </IconButton>
            )}
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          flex: 1,
        }}>
          {[value1, value2, '-'].map((value, index) => (
            <Box key={index} sx={{ 
              width: { xs: '100%', sm: '33.33%' },
              borderRight: { 
                xs: 'none', 
                sm: index < 2 ? '1px solid #e0e0e0' : 'none' 
              },
              borderBottom: { 
                xs: index < 2 ? '1px solid #e0e0e0' : 'none', 
                sm: 'none' 
              },
              bgcolor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {showDash ? (
                <>
                  <Box sx={{ 
                    p: 2, 
                    borderBottom: isLastAmenity ? '1px solid #e0e0e0' : 'none',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ 
                      fontSize: { xs: '18px', sm: index === 0 ? '20px' : '16px' },
                      color: '#009681',
                      fontWeight: index === 0 ? 600 : 500,
                      textAlign: 'left',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                    }}>
                      {typeof value === 'boolean' ? (
                        value ? (
                          <DoneIcon sx={{ color: '#009681' }} />
                        ) : (
                          <CloseIcon sx={{ color: 'black' }} />
                        )
                      ) : value}
                    </Typography>
                  </Box>
                  {isLastAmenity && (
                    <Box sx={{ p: 2 }}>
                      <Typography 
                        component="span" 
                        sx={{ 
                          fontSize: '14px', 
                          color: '#303030',
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline'
                          },
                          ...(index === 2 && {
                            visibility: 'hidden'
                          })
                        }}
                      >
                        See All 8 Amenities
                      </Typography>
                    </Box>
                  )}
                </>
              ) : (
                <Box sx={{ p: 2 }}>
                  <Typography sx={{ 
                    fontSize: '14px', 
                    color: '#303030',
                    textAlign: { xs: 'center', sm: 'left' }
                  }}>
                    {value}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

const Section = ({ title, isExpanded = true, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      bgcolor: 'white',
      border: '1px solid #e0e0e0',
      borderTop: 'none',
      '&:first-of-type': {
        borderTop: '1px solid #e0e0e0',
      },
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: { xs: 1.5, sm: 2 },
        borderBottom: isExpanded ? '1px solid #e0e0e0' : 'none'
      }}>
        <Typography sx={{ 
          fontSize: { xs: '18px', sm: '20px' }, 
          color: '#303030', 
          fontWeight: 520 
        }}>
          {title}
        </Typography>
        <IconButton size={isMobile ? "small" : "medium"}>
          {isExpanded ? 
            <KeyboardArrowUpIcon sx={{ color: '#303030', fontSize: { xs: '20px', sm: '25px' } }} /> : 
            <KeyboardArrowDownIcon sx={{ color: '#303030', fontSize: { xs: '20px', sm: '25px' } }} />
          }
        </IconButton>
      </Box>
      {isExpanded && children}
    </Box>
  );
};

const ComparisonSection = () => {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '1250px',
      mx: 'auto'
    }}>
      <Section title="Project Details" isExpanded={true}>
        <TableRow label="Developer Name" value1="ATS Infrastructure" value2="Mahagun Group" />
        <TableRow label="Price/Sqft" value1="$3566" value2="$3566" />
        <TableRow label="Maintenance/Sqft" value1="$566" value2="$366" />
        <TableRow label="Possession Date & Status" value1="20 Jan 2022" value2="17 Jan 2024" />
        <TableRow label="Project Land Area" value1="Ready to Move" value2="Under construction" noBorder />
      </Section>

      <Section title="Master Plan" isExpanded={true}>
        <TableRow label="Project Land Area" value1="50 Acres" value2="30 Acres" />
        <TableRow label="Open Area" value1="6 Acres" value2="5 Acres" />
        <TableRow label="Total Number of Flats" value1="355" value2="5545" />
        <TableRow label="Density Factor - Units/Acre" value1="35/Acre" value2="25/Acre" noBorder />
      </Section>

      <Section title="Amenities" isExpanded={true}>
        <TableRow label="Power Backup" value1={true} value2={false} showDash={true} />
        <TableRow label="Piped Gas" value1={true} value2={false} showDash={true} />
        <TableRow label="Clubhouse" value1={true} value2={false} showDash={true} />
        <TableRow 
          label="Children's / toddler's Play Area" 
          value1={true} 
          value2={false} 
          showDash={true}
          isLastAmenity={true}
          noBorder
        />
      </Section>

      <Section title="Floor Plan" isExpanded={false} />
      <Section title="Unit Plan" isExpanded={false} />
      <Section title="Locality Comparison" isExpanded={false} />
      <Section title="Builder Repute" isExpanded={false} />
    </Box>
  );
};

export default ComparisonSection;