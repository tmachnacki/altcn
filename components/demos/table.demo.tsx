"use client";

import * as React from "react";

// import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  const [bleed, setBleed] = React.useState(false);
  const [gutter, setGutter] = React.useState(6);
  return (
    <>
      <ComponentContainer className="px-0 py-(--demo-gutter)">
        <Table gutter={gutter} bleed={bleed}>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHead>
            <TableRow>
              {/* <TableHeader>
                <Checkbox />
              </TableHeader> */}
              <TableHeader className="w-24">Invoice</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Method</TableHeader>
              <TableHeader className="text-right">Amount</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                {/* <TableCell>
                  <Checkbox />
                </TableCell> */}
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="table-gutter">Gutter</Label>
          <Input
            id="table-gutter"
            type="number"
            step={0.5}
            min={0}
            value={gutter}
            onChange={(e) => setGutter(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch id="table-bleed" checked={bleed} onCheckedChange={setBleed} />
          <Label htmlFor="table-bleed">Bleed</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
