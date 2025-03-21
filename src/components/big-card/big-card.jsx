import { Box, Card, Button, CardMedia, IconButton, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { LearnMoreTypography } from 'src/components/learn-more/learn-more';

export default function BigCard({
  buttontitle,
  coverSrc,
  items,
  style,
  sx,
  heading = '',
  subheading = '',
  showButton = true,
  buttonText = 'Verify Email',
  buttonEndIcon = true
}) {
  return (
    <Card sx={{ p: 5, display: 'flex', justifyContent: 'space-between', gap: 3,flexDirection: { xs: "column", md: "row" } , ...sx }} >
      {/* Left Section */}
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'start',
          flexDirection: 'column',
          alignItems: 'start',
          gap: 2,
          width: {xs:'100%',md:'60%'},
          // flexDirection: { xs: "column", md: "col" }
        }}
      >
        <Box>
          <Typography variant="h6">{heading}</Typography>
          <Typography variant="body2" fontWeight={500} color="#637381" sx={{ mt: 1 }}>
            {subheading}
          </Typography>
        </Box>

        <Box component="ul" sx={{width:{xs:"100%"},...style}}>
          {items.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" fontWeight={500} color="#637381">
                {item}
                {index === items.length - 1 && <LearnMoreTypography />}
              </Typography>
            </li>
          ))}
        </Box>
        {showButton && (
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                color: '#078DEE',
                backgroundColor: '#ffff',
                border: '1px solid',
                borderColor: '#078DEE',
                '&:hover': {
                  backgroundColor: '#ebf6fe',
                },
              }}
              startIcon={
                <Iconify
                  icon="heroicons:plus-circle-16-solid"
                  color="primary"
                  styles={{ width: 18, height: 18 }}
                />
              }
              endIcon={buttonEndIcon && <Iconify icon="formkit:down" styles={{ width: 18, height: 18 }} />}
            >
              {buttonText}
            </Button>
          </Box>
        )}
      </Box>

      {/* Right Section with Image and Play Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          position="relative"
          sx={{ borderRadius: '24px', overflow: 'hidden', backgroundColor: 'red' }}
        >
          <CardMedia
            component="img"
            src={coverSrc}
            title="Cover Image"
            sx={{
              height: '100%',
              width: '100%',
              cursor: 'pointer',
              objectFit: 'contain',
              borderRadius: '16px ',
              backgroundColor: 'green',
            }}
          />
          <IconButton
            aria-label="play"
            sx={{
              padding: '0px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#078DEE',
              animation: 'pulse 2s infinite',
              zIndex: 2,
              '@keyframes pulse': {
                '0%': { transform: 'translate(-50%, -50%) scale(1)' },
                '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity:7 },
                '100%': { transform: 'translate(-50%, -50%) scale(1)' },
              },
            }}
          >
            <Iconify icon="icon-park-solid:play" width={50} height={50} sx={{backgroundColor:"white",borderRadius:8 , p:0}} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
