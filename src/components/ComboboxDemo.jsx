"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { useInfoRuangMeeting } from "@/contexts"



export function ComboboxDemo({dataCombo, value, onChange, loading, tipe}) {
  const [open, setOpen] = React.useState(false)
  const {infoUnitOffice, updateInfoUnitOffice,infoRoomMeeting, updateInfoRoomMeeting } = useInfoRuangMeeting();
    if (loading) {
    // tampilkan skeleton saat data masih dimuat
    return (
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-10 w-[200px] rounded-lg" />
      </div>
    )
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
 
        >
          {tipe === "office" ? value
            ? dataCombo.find((data) => data.id === value)?.officeName
            : "Pilih Office" : value
            ? dataCombo.find((data) => data.id === value)?.roomName
            : "Pilih Ruang Meeting"}
       
               
            {/* {tipe === "office" && "Pilih Office"} */}
          <ChevronsUpDown className="opacity-50" />
        </Button>
        
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No list found.</CommandEmpty>
            <CommandGroup>
              {dataCombo.map((data) => (
                <CommandItem
                  key={data.id}
                  value={data.id}
                  onSelect={(currentValue) => {
                    // setValue(currentValue === value ? "" : currentValue)
                  
                     {
                       tipe === "office"
                         ? updateInfoUnitOffice(
                             dataCombo.find((data) => data.id === currentValue)
                               ?.officeName
                           )
                         : updateInfoRoomMeeting(
                             dataCombo.find((data) => data.id === currentValue)
                               ?.roomName
                           );
                     }
                    onChange(currentValue === value ? "" : currentValue)
                
                    
                       
                   
                    setOpen(false)
                  }}
                >
                  {tipe === "office" ? data.officeName : data.roomName}
                 
                  <Check
                    className={cn(
                      "ml-auto",
                      value === data.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
