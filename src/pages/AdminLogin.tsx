
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { EyeIcon, EyeOff, Lock, ShieldAlert, User } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { useToast } from "@/components/ui/use-toast";

const AdminLogin = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Invalid credentials",
        description: "Please provide both username and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: "This is a demo. Admin authentication is not implemented yet.",
        variant: "destructive",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <Container className="py-16 md:py-20">
        <div className="max-w-md mx-auto">
          <Card className="border-border/50 shadow-subtle fade-in">
            <CardHeader className="space-y-1">
              <div className="mx-auto mb-4 bg-primary/10 p-2 rounded-full">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
              <CardDescription className="text-center">
                Secure access for authorized administrators only
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="username">
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User className="h-4 w-4" />
                    </span>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className="pl-10"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Lock className="h-4 w-4" />
                    </span>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full aspect-square rounded-l-none"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
              
              <div className="flex items-center space-x-3 bg-muted/50 p-3 rounded-lg text-sm">
                <ShieldAlert className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">
                  This area is restricted to authorized administrators only. Unauthorized access attempts will be logged.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-border/50 pt-6">
              <p className="text-xs text-muted-foreground">
                Contact system administrator if you need access
              </p>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AdminLogin;
