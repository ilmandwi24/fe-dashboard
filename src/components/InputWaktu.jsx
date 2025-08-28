import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function InputWaktu({ dataWaktu, setDataWaktu, waktuTambahan }) {
  const [waktu, setWaktu] = React.useState(null);
  const [inputDate, setInputDate] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const sekarang = getHourAndMinutes();
    console.log("ooo", sekarang);
    setWaktu(sekarang);
  }, [inputDate]);

  function getHourAndMinutes() {
    const now = new Date();
    now.setHours(now.getHours() + waktuTambahan);
    const hour = String(now.getHours()).padStart(2, "0"); // jam 2 digit
    const minute = String(now.getMinutes()).padStart(2, "0"); // menit 2 digit
    return `${hour}:${minute}`;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          aria-expanded={open}
          className="w-48 justify-between font-normal"
        >
          {inputDate ?? "Pilih waktu mulai"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex gap-x-1">
          <Input
            onChange={(e) => setWaktu(e.target.value)}
            type="time"
            id="time-picker"
            step="60"
            defaultValue={dataWaktu ?? waktu}
            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
          <Button
            onClick={() => {
              alert(waktu);
              setInputDate(waktu);
              setDataWaktu(waktu);
              setOpen(false);
            }}
          >
            Simpan
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
