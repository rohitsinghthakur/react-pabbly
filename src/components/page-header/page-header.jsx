import { Box, Button, Typography } from "@mui/material";

import { Iconify } from "src/components/iconify";
import { LearnMoreTypography } from "src/components/learn-more/learn-more";

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        mt: 4,
        gap: 2, // Add spacing between elements
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens
        textAlign: { xs: "left", md: "left" }, // Center text on mobile
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "auto" } }}> {/* Full width on small screens */}
        <Typography variant="h4" sx={{ mb: 1 }}>{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "left", flexDirection: { xs: "row", md: "row" } }}>
          <Typography sx={{ color: "text.secondary", mb: { xs: 1, md: 0 } }}>
            {description}
          <LearnMoreTypography />
          </Typography>
        </Box>
      </Box>

      {showButton && (
        <Box sx={{ textAlign: { xs: "center", md: "right" }, width: { xs: "100%", md: "auto" } }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ width: { xs: "100%", sm: "auto" } }} // Full width on mobile
            startIcon={<Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />}
            endIcon={<Iconify icon="formkit:down" style={{ width: 18, height: 18 }} />
          }
          >
            {buttonTitle}
          </Button>
        </Box>
      )}
    </Box>
  );
}
