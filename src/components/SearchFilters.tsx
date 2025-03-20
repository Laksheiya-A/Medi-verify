
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronDown, Filter, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  onSearch: (filters: {
    query: string;
    status: string;
    purpose: string;
  }) => void;
  className?: string;
}

const SearchFilters = ({ onSearch, className }: SearchFiltersProps) => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch({ query, status, purpose });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, status, purpose, onSearch]);

  const resetFilters = () => {
    setQuery("");
    setStatus("");
    setPurpose("");
  };

  const purposeOptions = [
    "All Purposes",
    "Pain Reliever",
    "Antibiotic",
    "Anti-inflammatory",
    "Antihistamine",
    "Proton Pump Inhibitor",
    "ACE Inhibitor",
  ];

  const statusOptions = [
    "All Statuses",
    "Verified",
    "Expired",
    "Warning",
  ];

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicines..."
            className="pl-10 pr-10 h-10 bg-background border-border"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full aspect-square rounded-l-none"
              onClick={() => setQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-10 w-10 shrink-0",
            isFilterOpen && "bg-primary/10 border-primary/30"
          )}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {isFilterOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-border rounded-lg bg-accent/30 animate-fade-in">
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Select
              value={status}
              onValueChange={setStatus}
            >
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option} value={option === "All Statuses" ? "" : option.toLowerCase()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Purpose</label>
            <Select
              value={purpose}
              onValueChange={setPurpose}
            >
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Filter by purpose" />
              </SelectTrigger>
              <SelectContent>
                {purposeOptions.map((option) => (
                  <SelectItem key={option} value={option === "All Purposes" ? "" : option.toLowerCase()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2 flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-muted-foreground"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
