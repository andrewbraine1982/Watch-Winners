"use client";

import { useState } from "react";

const competition = {
  title: "Rolex GMT-Master II Pepsi",
  subtitle: "One authentic Rolex. One verified winner. Your chance starts with a single entry.",
  image: "/images/watches/RolexPepsi.png",
  price: 14.99,
  totalEntries: 299,
  soldEntries: 184,
};

const ticketOptions = [
  {
    entries: 1,
    badge: "",
  },
  {
    entries: 5,
    badge: "MOST POPULAR",
  },
  {
    entries: 10,
    badge: "BEST VALUE",
  },
];

export default function CompetitionPage() {
  const [selectedEntries, setSelectedEntries] = useState(5);

  const sold =
    (competition.soldEntries / competition.totalEntries) * 100;
