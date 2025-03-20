
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, AlarmClock, Users } from "lucide-react";
import { Medicine } from "@/data/medicines";
import { cn } from "@/lib/utils";

interface MedicineCardProps {
  medicine: Medicine;
  className?: string;
}

const MedicineCard = ({ medicine, className }: MedicineCardProps) => {
  const isExpired = new Date(medicine.expiryDate) < new Date();
  const isNearExpiry = !isExpired && 
    new Date(medicine.expiryDate).getTime() - new Date().getTime() < 90 * 24 * 60 * 60 * 1000; // 90 days

  // Format expiry date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  const getStatusClass = (status: Medicine['status']) => {
    switch (status) {
      case 'verified':
        return 'status-verified';
      case 'expired':
        return 'status-expired';
      case 'warning':
        return 'status-warning';
    }
  };

  const getStatusText = (status: Medicine['status']) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'expired':
        return 'Expired';
      case 'warning':
        return 'Warning';
    }
  };

  return (
    <Link to={`/medicines/${medicine.id}`}>
      <Card 
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-lg border-border/50 h-full card-hover", 
          className
        )}
      >
        <div className="aspect-square overflow-hidden relative">
          <img
            src={medicine.imageUrl}
            alt={medicine.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <Badge 
            className={cn(
              "absolute top-3 right-3 font-medium", 
              getStatusClass(medicine.status)
            )}
          >
            {getStatusText(medicine.status)}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{medicine.name}</h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-1">{medicine.purpose}</p>
          
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span className={cn(
                "line-clamp-1",
                isExpired ? "text-medicine-red" : isNearExpiry ? "text-medicine-yellow" : ""
              )}>
                Expires: {formatDate(medicine.expiryDate)}
              </span>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span className="line-clamp-1">{medicine.ageRestriction}</span>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span className="line-clamp-1">{medicine.usageDuration}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <span className="text-xs text-muted-foreground">Mfg: {medicine.manufacturer}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default MedicineCard;
