"use client";

import { getSummary } from "@/lib/experience";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/** Hero summary with experience years computed from the current date. */
export function DynamicSummary() {
  return useSyncExternalStore(subscribe, () => getSummary(), () => getSummary());
}
