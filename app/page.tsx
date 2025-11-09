"use client";

import { useState, useEffect } from "react";

type Entry = {
  id: number;
  name: string;
  item: string;
  address?: string | null;
};

const entries = [
  {
    id: 1,
    name: "Daði Oddberg Einarsson",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: "Meistaravellir 13, 107 Reykjavík, Iceland",
  },
  {
    id: 2,
    name: "Sæunn Heiðarsdóttir",
    item: "Áritað eintak af bókinni",
    address: null,
  },
  {
    id: 3,
    name: "Jón Baldur Lorange",
    item: "Áritað eintak af bók: Stuðningspakki",
    address: "Bygggarðar 1, 170 Seltjarnarnes, Iceland",
  },
  {
    id: 4,
    name: "Tinna Hallsdóttir",
    item: "Áritað eintak af bókinni",
    address: "Hallgerðargata 21, 105 Reykjavík, Ísland",
  },
  { id: 5, name: "Hjördís Lorange", item: "/", address: null },
  {
    id: 6,
    name: "Hjördís Sigurðardóttir",
    item: "Eintak af bókinni",
    address: "Beykihlíð 11, 105 Reykjavík, Ísland",
  },
  {
    id: 7,
    name: "Árni Þórður Randversson",
    item: "Áritað eintak af bókinni",
    address: "Reynimelur 90, 107 Reykjavík, Iceland",
  },
  {
    id: 8,
    name: "Jón Finnbogason",
    item: "Tvö eintök af bókinni",
    address: "Mávahlíð 7, 105 Reykjavík, Iceland",
  },
  {
    id: 9,
    name: "Hörður Lorange",
    item: "Áritað eintak af bókinni",
    address: "Bygggarðar 1, 170 Seltjarnarnes, Iceland",
  },
  {
    id: 10,
    name: "Hallbera Eiríksdóttir",
    item: "Tvö eintök af bókinni",
    address: "Frostafold 6, 112 Reykjavík, Iceland",
  },
  { id: 11, name: "Marta Rósudóttir", item: "/", address: null },
  {
    id: 12,
    name: "Baldvin Einarsson",
    item: "Eintak af bókinni",
    address: "Ásabraut 3, 300 Akranes, Iceland",
  },
  {
    id: 13,
    name: "Hjördís Sigurðardóttir",
    item: "Bók + prent úr bók: „Fiskimenn“",
    address: "Hlíðavegur 30, 200 Kópavogur, Island",
  },
  {
    id: 14,
    name: "Emma Guðrún Heiðarsdóttir",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: "Háaleitisbraut 28, 108 Reykjavík, Iceland",
  },
  {
    id: 15,
    name: "Sunna Pétursdóttir",
    item: "Áritað eintak af bókinni",
    address: "Háaleitisbraut 30, 108 Reykjavík, Ísland",
  },
  {
    id: 16,
    name: "Kolbrún Edda Haraldsdóttir",
    item: "Eintak af bókinni",
    address: "Víðivangur 16, 220 Hafnarfjörður, Ísland",
  },
  { id: 17, name: "Freyja Ingadóttir", item: "/", address: null },
  {
    id: 18,
    name: "Valgerður Gestsdóttir",
    item: "Eintak af bókinni",
    address: "Hlíðarhjalli 61, 200 Kópavogur, Ísland",
  },
  {
    id: 19,
    name: "Jóhanna Steingrímsdóttir",
    item: "Áritað eintak af bókinni",
    address: "Viðarás 22, 110 Reykjavík, IS",
  },
  {
    id: 20,
    name: "Þórhalla Arnljótsdóttir",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: null,
  },
  {
    id: 21,
    name: "Hjalti Snær Ægisson",
    item: "Tvö eintök af bókinni",
    address: "Hringbraut 59, 101 Reykjavík, Ísland",
  },
  {
    id: 22,
    name: "Guðlaug Jökulsdóttir",
    item: "Eintak af bókinni",
    address: "Mosagata 13, íbúð 305, 210 Garðabær, Iceland",
  },
  {
    id: 23,
    name: "Þorvaldur Tumi Baldursson",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: "Lindargata 54, 101 Reykjavík, Ísland",
  },
  {
    id: 24,
    name: "Andri Ulfarsson",
    item: "Tvö eintök af bókinni",
    address: "Brekkuhlíð 7, 221 Hafnarfjörður, Iceland",
  },
  {
    id: 25,
    name: "Guðmundur Sigurðsson",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: "Stigahlíð 64, 105 Reykjavík, Iceland",
  },
  {
    id: 26,
    name: "Marín McGinley",
    item: "Áritað eintak af bókinni",
    address: "Mávahlíð 15, 105 Reykjavík, Ísland",
  },
  {
    id: 27,
    name: "Arndis Thorarenen",
    item: "Eintak af bókinni",
    address: "Stigahlíð 64, 105 Reykjavík, Iceland",
  },
  {
    id: 28,
    name: "Kristján Albert Loftsson",
    item: "Eintak af bókinni",
    address: "Barmahlíð 45, 105 Reykjavík, Iceland",
  },
  {
    id: 29,
    name: "Guðlaug Eyþórsdóttir",
    item: "Áritað eintak af bókinni",
    address: "Laugarnesvegur 45, 105 Reykjavík, Iceland",
  },
  {
    id: 30,
    name: "Sunna Örlygsdóttir",
    item: "Eintak af bókinni",
    address: "Smyrlaheiði 52, 810 Hveragerði, IS",
  },
  {
    id: 31,
    name: "Hilma Sveinsdottir",
    item: "Áritað eintak af bókinni",
    address: null,
  },
  {
    id: 32,
    name: "Albína Pálsdóttir",
    item: "Eintak af bókinni",
    address: "Háaleitisbraut 30, 108 Reykjavík, Iceland",
  },
  {
    id: 33,
    name: "Jon Karl Arnason",
    item: "Eintak af bókinni",
    address: "Grensásvegur 1b, íbúð 401, 108 Reykjavík, Iceland",
  },
  {
    id: 34,
    name: "Guðrún Lilja Hallgrímsdóttir",
    item: "Áritað eintak af bókinni",
    address: "Flétturimi 8, 112 Reykjavík, Ísland",
  },
  {
    id: 35,
    name: "Ása Bryndís Gunnarsdóttir",
    item: "Tvö eintök af bókinni",
    address: "Giljaland 15, 108 Reykjavík, Iceland",
  },
  {
    id: 36,
    name: "Heiðar Pétur Guðjónsson",
    item: "Áritað eintak af bókinni",
    address: "Vættaborgir 125, 112 Reykjavík, Iceland",
  },
  {
    id: 37,
    name: "Jóhann Hjartarson",
    item: "Tvö eintök af bókinni",
    address: null,
  },
  {
    id: 38,
    name: "Jóhann Hjartarson",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: "Síðusel 9, 109 Reykjavík, Iceland",
  },
  { id: 39, name: "Brynja Berndsen", item: "/", address: null },
  {
    id: 40,
    name: "Stefán Ás Ingvarsson",
    item: "Tvö eintök af bókinni",
    address: "Suðurgata 22, 101 Reykjavík, Ísland",
  },
  {
    id: 41,
    name: "Ísak Kári Kárason",
    item: "Eintak af bókinni",
    address: null,
  },
  {
    id: 42,
    name: "Snæbjörn Guðmundsson",
    item: "Tvö eintök af bókinni",
    address: "Bergþórugata 17, 101 Reykjavík, Iceland",
  },
  {
    id: 43,
    name: "Árni Þórður Randversson",
    item: "Púkkaðu inn",
    address: null,
  },
  {
    id: 44,
    name: "Jenni Bingo",
    item: "Bók og teikning: „Póstkort úr undirmeðvitund“",
    address: "Núpur, 108 Reykjavík, Ísland",
  },
  {
    id: 45,
    name: "E Hrefna Garðarsdóttir",
    item: "Tvö eintök af bókinni",
    address: "Kirkjusandi 1, íbúð 401, 105 Reykjavík, Ísland",
  },
  {
    id: 46,
    name: "Fanney Þóra Vilhjálmsdóttir",
    item: "Bók + prent úr bók: „Kisa fær mjólk“",
    address: null,
  },
];

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("checklist");
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  // Save when changed
  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(checked));
  }, [checked]);

  function toggle(id: number) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Checklist</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {entries.map((entry) => (
          <li key={entry.id} style={{ marginBottom: 12 }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={!!checked[entry.id]}
                onChange={() => toggle(entry.id)}
                style={{ marginRight: 8 }}
              />
              <strong>{entry.name}</strong> — {entry.item}
              {entry.address && (
                <div style={{ fontSize: 14, opacity: 0.7 }}>
                  {entry.address}
                </div>
              )}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
