
import { FeatureTable, HeaderType, type FeatureData, type FeatureHeader,} from "@kumarnishu/react-table";
import { users } from "./data";
// import  "@kumarnishu/react-table/dist/index.css";

export const userHeaders: FeatureHeader[] = [
  {
    id: 1,
    key: "id",
    header: "ID",
    type: HeaderType.Number,
    width: 20,
    editable: false,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 2,
    key: "name",
    header: "Name",
    type: HeaderType.Text,
    width: 180,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 3,
    key: "email",
    header: "Email",
    type: HeaderType.Email,
    width: 220,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 4,
    key: "age",
    header: "Age",
    type: HeaderType.Number,
    width: 100,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 5,
    key: "phone",
    header: "Phone",
    type: HeaderType.Text,
    width: 160,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 6,
    key: "address",
    header: "Address",
    type: HeaderType.Paragraph,
    width: 260,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 7,
    key: "city",
    header: "City",
    type: HeaderType.Text,
    width: 150,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 8,
    key: "state",
    header: "State",
    type: HeaderType.Text,
    width: 150,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 9,
    key: "country",
    header: "Country",
    type: HeaderType.Text,
    width: 150,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 10,
    key: "zipCode",
    header: "Zip Code",
    type: HeaderType.Text,
    width: 120,
    editable: true,
    hidden: false,
    dateOptions: {},
  },
  {
    id: 11,
    key: "isActive",
    header: "Status",
    type: HeaderType.Select,
    width: 130,
    editable: true,
    hidden: false,
    items: [
      { id: 1, label: "Active" },
      { id: 0, label: "Inactive" },
    ],
    dateOptions: {},
  },
  {
    id: 12,
    key: "role",
    header: "Role",
    type: HeaderType.Select,
    width: 140,
    editable: true,
    hidden: false,
    items: [
      { id: 1, label: "Admin" },
      { id: 2, label: "User" },
    ],
    dateOptions: {},
  },
  {
    id: 13,
    key: "createdAt",
    header: "Created At",
    type: HeaderType.Date,
    width: 170,
    editable: false,
    hidden: false,
    dateOptions: {
      isTimeStamp: true,
    },
  },
  {
    id: 14,
    key: "lastLogin",
    header: "Last Login",
    type: HeaderType.Date,
    width: 170,
    editable: false,
    hidden: false,
    dateOptions: {
      isTimeStamp: true,
    },
  },
];

function App() {
  const data = users as FeatureData[];
  return (
    <FeatureTable feature="Users" data={data} headers={userHeaders} />
  )
}

export default App