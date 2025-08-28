import React, { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useInfoRapat } from "@/contexts";
export default function InfoRapatKonsumsi() {
  const { konsumsi, setKonsumsi,selectedKonsumsi, setSelectedKonsumsi } = useInfoRapat();
  useEffect(() => {
    fetch(
      "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi"
    )
      .then((res) => {
        if (res.ok) {
          //   console.log(res.json());
          return res.json();
        }
      })
      .then((data) => {
        // console.log("-------")
        //   console.log(data.slice(0,3))
        setKonsumsi(data.slice(0, 3));
        console.log(konsumsi);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // setLoadingOffice(false);
      });
  }, []);

  const handleChange = (value) => {
    setSelectedKonsumsi(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // uncheck
          : [...prev, value] // check
    );
  };

  return (
    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
      <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
        Jenis Konsumsi
      </div>
      {konsumsi && konsumsi.map((item) => (
        <div className="flex items-center gap-3">
          <Checkbox
            id={item.id}
            checked={selectedKonsumsi.includes(item)}
            // onCheckedChange={() => handleChange(item)}
            className={
              "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
            }
          />
          <Label htmlFor="terms">{item.name}</Label>
        </div>
      ))}
    </div>
  );
}
