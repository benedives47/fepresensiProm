import {
  Text,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const noRecordData = (columns) => {
  return (
    <Tbody>
      <Tr>
        <Td h="200px" colSpan={columns.length} textAlign="center">
          No Records
        </Td>
      </Tr>
    </Tbody>
  );
};

const RowWithLink = ({ linkTo, children, dataId }) => {
  return <Link href={`${linkTo}/${dataId}`}>{children}</Link>;
};

const BasicTable = ({
  datas,
  columns,
  variant,
  size = "md",
  width = "fit-content",
  loadingState,
  onHover,
  linkTo,
  bgHeader,
  border,
  borderRadius,
}) => {
  return (
    <TableContainer w={width} border={border} borderRadius={borderRadius}>
      <Table variant={variant} size={size}>
        {datas.length === 0 && !loadingState && noRecordData(columns)}
        <Thead>
          <Tr>
            {columns?.map((column) => {
              return (
                <Th
                  fontSize="16px"
                  color="gray.500"
                  key={column.key}
                  w={column.width || "fit-content"}
                  bg={bgHeader}
                >
                  <Flex gap="10px" alignItems="center">
                    <Text>{column.title}</Text>
                    {column.renderHeaderProperty}
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {typeof loadingState !== "undefined" && loadingState ? (
            <Tr>
              <Td colSpan={columns.length} textAlign="center">
                <Spinner
                  color="blue.500"
                  thickness="4px"
                  speed="0.65s"
                  size="lg"
                  emptyColor="#fafafa"
                />
              </Td>
            </Tr>
          ) : (
            datas.map((data, i) => (
              <Tr key={i} _hover={onHover}>
                {columns.map((column) => (
                  <React.Fragment key={column.key}>
                    {linkTo ? (
                      <RowWithLink dataId={data.id} linkTo={linkTo}>
                        <Td
                          textTransform={
                            column.capitalize ? "capitalize" : "none"
                          }
                          fontSize="14px"
                          w={column.width || "fit-content"}
                        >
                          {column.render
                            ? column.render(data, i)
                            : data[column.key]}
                        </Td>
                      </RowWithLink>
                    ) : (
                      <Td
                        textTransform={
                          column.capitalize ? "capitalize" : "none"
                        }
                        fontSize="14px"
                        w={column.width || "fit-content"}
                      >
                        {column.render
                          ? column.render(data, i)
                          : data[column.key]}
                      </Td>
                    )}
                  </React.Fragment>
                ))}
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
