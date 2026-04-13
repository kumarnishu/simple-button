import { useMemo } from "react";
import { Box, Typography, Paper, Chip, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {ReactTable} from "@kumarnishu/basic-react-table";


type Tenant = {
  id: number;
  name: string;
  domain: string;
  tenantIdentifier: string;
  timezone: string;
  status: "Active" | "Inactive";
};

// 🔥 Fake Data
const tenants: Tenant[] = [
  {
    id: 1,
    name: "Agarson Shoes",
    domain: "agarson.com",
    tenantIdentifier: "AS",
    timezone: "Asia/Kolkata",
    status: "Active",
  },
  {
    id: 2,
    name: "TechNova",
    domain: "technova.com",
    tenantIdentifier: "TN",
    timezone: "Europe/London",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Skyline Corp",
    domain: "skyline.com",
    tenantIdentifier: "SC",
    timezone: "America/New_York",
    status: "Active",
  },
];

export default function App() {
  const columns = useMemo<any[]>(() => [
    {
      accessorKey: "name",
      header: "Tenant Name",
    },

    // 🌐 Domain (clickable)
    {
      accessorKey: "domain",
      header: "Domain",
      Cell: ({ cell }: any) => {
        const value = cell.getValue();
        return (
          <span
            style={{
              color: "var(--primary)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() =>
              window.open(`https://${value}`, "_blank")
            }
          >
            {value}
          </span>
        );
      },
    },

    // 🔑 Tenant Code
    {
      accessorKey: "tenantIdentifier",
      header: "Code",
      Cell: ({ cell }: any) => (
        <Chip
          label={cell.getValue()}
          size="small"
          sx={{
            backgroundColor: "var(--surface-alt)",
            color: "var(--text)",
            border: "1px solid var(--border)",
          }}
        />
      ),
    },

    {
      accessorKey: "timezone",
      header: "Timezone",
    },

    // ✅ Status
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }: any) => {
        const value = cell.getValue();
        return (
          <Chip
            label={value}
            size="small"
            sx={{
              backgroundColor:
                value === "Active"
                  ? "var(--success)"
                  : "var(--border)",
              color: value === "Active" ? "#fff" : "var(--text)",
            }}
          />
        );
      },
    },

    // ⚙️ Actions
    {
      header: "Actions",
      Cell: () => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small">
            <FontAwesomeIcon icon={faPenToSquare} />
          </IconButton>

          <IconButton size="small">
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </Box>
      ),
    },
  ], []);

  return (
    <Box sx={{ p: 2 }}>

      {/* 🔹 Title */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Manage Tenants
      </Typography>

      {/* 🔹 Table */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <ReactTable
          columns={columns}
          data={tenants}
          pageSize={50}
          enableColumnResizing={true} enableColumnPinning={true}
        />
      </Paper>
    </Box>
  );
}