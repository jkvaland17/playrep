import Box from "@mui/material/Box";
import { MoonLoader } from "react-spinners";

const TableLoader = ({ width, height }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={"Testing"}
    >
      {/* <div className="spin_loder">
        <span className={`ant-spin-dot ant-spin-dot-spin data_load`}>
          <i className="ant-spin-dot-item" />
          <i className="ant-spin-dot-item" />
          <i className="ant-spin-dot-item" />
          <i className="ant-spin-dot-item" />
        </span>
      </div> */}
      {<MoonLoader color="#20b7c9" />}
    </Box>
  );
};

export default TableLoader;
