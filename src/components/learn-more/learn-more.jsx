import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function LearnMoreTypography({ children, ...props }) {
  return (
    <Typography
    component="span"
      variant="body2"
      fontWeight={500}
      display="inline"
      {...props}
      sx={{
        color: '#078DEE',
        textDecoration: 'underline',
        cursor: 'pointer',
        ...props.sx,
        ml: 0.5,
        textDecorationColor: 'rgba(7, 141, 238, 0.4)',
      }}
    >
      Learn more
    </Typography>
  );
}
