export const accessToken =
  "pk.eyJ1IjoibGVvc2dvbWVzIiwiYSI6ImNsMDhob3FiNDAzZm8zaW4zZXp3ZHdjMDcifQ.G84YIGM34H0GzLEReMR5iQ";

export const fillOpacity = [
  [
    "case",
    ["boolean", ["feature-state", "click"], false],
    1,
    ["boolean", ["feature-state", "highlight"], false],
    1,
    ["boolean", ["feature-state", "hover"], false],
    1,
    0.8,
  ],
  0.8,
];

export const lineWidth = [
  [
    "case",
    ["boolean", ["feature-state", "click"], false],
    1.8,
    ["boolean", ["feature-state", "highlight"], false],
    1.8,
    ["boolean", ["feature-state", "hover"], false],
    1.8,
    0.75,
  ],
  2,
];

export const lineOpacity = [
  [
    "case",
    ["boolean", ["feature-state", "click"], false],
    1.5,
    ["boolean", ["feature-state", "highlight"], false],
    1.5,
    ["boolean", ["feature-state", "hover"], false],
    1.5,
    0.5,
  ],
  1,
];

export const mapLayer = {
  stops: [
    [0, "#ADDC91"],
    [55000, "#6CC24A"],
    [110000, "#509E2F"],
    [215000, "#4A7729"],
  ],
};
